export function changeImageSize(imageUrl, width, height) {
    // Split the URL by '/'
    let parts = imageUrl.split("/");
    // Get the last part of the URL which contains the image dimensions
    let lastPart = parts[parts.length - 1];
    // Replace the dimensions with new width and height
    let newLastPart = `${width}x${height}`;
    // Construct the new URL
    parts[parts.length - 1] = newLastPart;
    let newUrl = parts.join("/");
    return newUrl;
}

export const replaceMongoIdInArray = (array) => {
    const mappedArray = array
        .map((item) => {
            return {
                id: item._id.toString(),
                ...item,
            };
        })
        .map(({ _id, ...rest }) => rest);

    return mappedArray;
};

export const replaceMongoIdInObject = (obj) => {
    const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };
    return updatedObj;
};

// changes
