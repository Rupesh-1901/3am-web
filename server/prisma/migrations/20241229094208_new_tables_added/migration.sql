-- CreateTable
CREATE TABLE "AdminUser" (
    "id" BIGSERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "loginType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdminUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HrUser" (
    "id" BIGSERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "loginType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HrUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobPost" (
    "id" SERIAL NOT NULL,
    "jobTitle" INTEGER NOT NULL,
    "jobLocation" INTEGER NOT NULL,
    "numberOfOpenings" INTEGER NOT NULL,
    "area" INTEGER NOT NULL,
    "experience" INTEGER NOT NULL,
    "monthlyInHand" TEXT NOT NULL,
    "isBonusAvailable" BOOLEAN NOT NULL,
    "jobDescription" TEXT NOT NULL,
    "skills" INTEGER NOT NULL,
    "preferredLanguage" TEXT,
    "age" TEXT,
    "certification" TEXT,
    "specialization" TEXT,
    "employmentType" TEXT NOT NULL,
    "interviewMethod" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "sizeOfOrganisation" TEXT NOT NULL,
    "jobAddress" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "emailId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "hrId" BIGINT NOT NULL,

    CONSTRAINT "JobPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobSeekerUser" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobSeekerUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "coverLetter" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "appliedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "jobPostId" INTEGER NOT NULL,
    "jobSeekerId" BIGINT NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_email_key" ON "AdminUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "HrUser_email_key" ON "HrUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "JobSeekerUser_email_key" ON "JobSeekerUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Application_jobPostId_jobSeekerId_key" ON "Application"("jobPostId", "jobSeekerId");

-- AddForeignKey
ALTER TABLE "JobPost" ADD CONSTRAINT "JobPost_hrId_fkey" FOREIGN KEY ("hrId") REFERENCES "HrUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_jobPostId_fkey" FOREIGN KEY ("jobPostId") REFERENCES "JobPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_jobSeekerId_fkey" FOREIGN KEY ("jobSeekerId") REFERENCES "JobSeekerUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
