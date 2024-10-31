export default function (query) {
    if (query != null) {
        if (!Array.isArray(query)) {
            return query;
        } else {
            return query[0];
        }
    }
    return null;
}