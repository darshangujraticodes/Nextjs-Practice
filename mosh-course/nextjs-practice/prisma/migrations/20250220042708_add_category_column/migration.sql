/*
  Warnings:

  - You are about to drop the column `Assignee` on the `todos` table. All the data in the column will be lost.
  - Added the required column `task_category` to the `Todos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `todos` DROP COLUMN `Assignee`,
    ADD COLUMN `assignee` VARCHAR(191) NOT NULL DEFAULT 'self',
    ADD COLUMN `task_category` VARCHAR(191) NOT NULL,
    MODIFY `assignor` VARCHAR(191) NOT NULL DEFAULT 'self';
