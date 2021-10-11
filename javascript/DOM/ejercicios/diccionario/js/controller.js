function filterByLetter(pList, pLetter) {
    const filterList = pList.filter(item => item.letter === pLetter);
    return filterList;
}