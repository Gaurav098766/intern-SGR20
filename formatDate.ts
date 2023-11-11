export const formatDate = (timestamp: number): string => {
    // Convert seconds to milliseconds
    const date = new Date(timestamp * 1000); 
    const day = date.getDate();
    // Months are zero-based
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};