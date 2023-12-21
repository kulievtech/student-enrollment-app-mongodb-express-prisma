import { service } from "../services/service.js";
import { catchAsync } from "../errors/catchAsync.js";
import { CustomError } from "../errors/customError.js";

class Controller {
    create = catchAsync(async (req, res) => {
        const {
            body: { firstName, lastName, email, className }
        } = req;

        const input = {
            firstName,
            lastName,
            email,
            className
        };

        const student = await service.create(input);

        res.status(201).json({
            data: student
        });
    });

    getAll = catchAsync(async (req, res) => {
        const students = await service.getAll();

        res.status(201).json({
            data: students
        });
    });

    updateOne = catchAsync(async (req, res) => {
        const {
            body: { firstName, lastName, email, className },
            params: { id }
        } = req;

        const update = {};

        if (firstName) {
            update.firstName = firstName;
        }
        if (lastName) {
            update.lastName = lastName;
        }
        if (email) {
            update.email = email;
        }
        if (className) {
            update.className = className;
        }

        if (
            !(
                update.firstName ||
                update.lastName ||
                update.email ||
                update.className
            )
        ) {
            throw new CustomError(
                "At least one of the following fields is required: firstName, lastName, email, className",
                400
            );
        }

        await service.updateOne(id, update);

        res.status(204).send();
    });

    deleteOne = catchAsync(async (req, res) => {
        const {
            params: { id }
        } = req;

        await service.deleteOne(id);

        res.status(204).send();
    });
}

export const controller = new Controller();
