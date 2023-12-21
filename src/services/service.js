import { prisma } from "../prisma/index.js";

class Service {
    create = async (input) => {
        const student = await prisma.student.create({
            data: {
                ...input
            }
        });

        return student;
    };

    getAll = async () => {
        const students = await prisma.student.findMany({
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                className: true
            }
        });

        return students;
    };

    updateOne = async (id, update) => {
        const student = await prisma.student.update({
            where: {
                id
            },
            data: {
                ...update
            }
        });
    };

    deleteOne = async (id) => {
        await prisma.student.delete({
            where: {
                id
            }
        });
    };
}

export const service = new Service();
