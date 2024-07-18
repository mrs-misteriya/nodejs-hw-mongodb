export const mongooseSaveError = (error, data, next) => {
    error.status = 400,
    next();
};

export const setUpdateSettings = function (next) {
    this.options.new(),
    this.options.runValidators = true;
    next();
};

