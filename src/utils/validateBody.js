import createHttpError from "http-errors";

const validateBody = schema => {
    const func = async (req, res, next) => {
    try {
        await schema.validateAsync(req.body, {
            abortEarly: false,
        });
        next();
    } catch (error) {
        const resError = createHttpError(404, error.message);
        next(resError);
        };
    };
    return func;
};

export default validateBody;
