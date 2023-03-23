export const removeDuplicates = (currItems: any[], newItems: any[]): any[] => {
    const currentIds = currItems.map(item => item.id);
    const uniqueItems = newItems.filter(item => !currentIds.includes(item.id));

    return currItems.concat(uniqueItems);
};