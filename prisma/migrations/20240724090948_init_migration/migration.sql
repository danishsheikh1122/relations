-- CreateTable
CREATE TABLE `Onetoone` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Onetoone_id_key`(`id`),
    UNIQUE INDEX `Onetoone_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ones` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `salary` INTEGER NOT NULL,

    UNIQUE INDEX `Ones_id_key`(`id`),
    UNIQUE INDEX `Ones_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ones` ADD CONSTRAINT `Ones_email_fkey` FOREIGN KEY (`email`) REFERENCES `Onetoone`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
