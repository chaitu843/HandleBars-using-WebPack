export default (context,options) => {
    let data = ``;

    context.forEach(element => {
        data += options.fn(element);
    });

    return data;
}