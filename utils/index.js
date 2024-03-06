exports.fieldValidator = (fields) => {
    const { task_name, task_description } = fields;
    if (!task_name || !task_description) {
        const emptyFields = [];
        Object.keys(fields).forEach((field) => {
            if (fields[field].length <= 0) {
                emptyFields.push(field);
            }
        });
        return {
            error: 'All fields are required',
            emptyFields,
        };
    }
    return null;
};