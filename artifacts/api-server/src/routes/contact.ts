import { Router, type IRouter } from "express";
import { db, contactSubmissionsTable } from "@workspace/db";
import { SubmitContactBody, SubmitContactResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [submission] = await db
    .insert(contactSubmissionsTable)
    .values({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone ?? null,
      organization: parsed.data.organization ?? null,
      message: parsed.data.message,
    })
    .returning();

  res.status(201).json(SubmitContactResponse.parse({
    id: submission.id,
    name: submission.name,
    email: submission.email,
    phone: submission.phone ?? null,
    organization: submission.organization ?? null,
    message: submission.message,
    createdAt: submission.createdAt.toISOString(),
  }));
});

export default router;
