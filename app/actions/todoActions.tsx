"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function create(formData: FormData) {
  const input = formData.get("input") as string;

  await prisma.todo.create({
    data: {
      title: input,
    },
  });
}
