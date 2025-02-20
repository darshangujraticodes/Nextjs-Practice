-- CreateTable
CREATE TABLE `Todos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `task_name` VARCHAR(191) NOT NULL,
    `assignor` VARCHAR(191) NOT NULL,
    `Assignee` VARCHAR(191) NOT NULL,
    `priority` VARCHAR(191) NOT NULL DEFAULT 'medium',
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',
    `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Todos_task_name_key`(`task_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
