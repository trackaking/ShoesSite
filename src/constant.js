const svrURL = 'https://trackaking.herokuapp.com';

function ValiderUsername() {
    // eslint-disable-next-line prefer-regex-literals
    const username = RegExp(/^[A-Za-z0-9_]{5 , 20}/);
    return username;
}

const sizeList = ['US 3.5', 'US 4', 'US 4.5', 'US 5', 'US 5.5', 'US 6', 'US 6.5', 'US 7',
    'US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 11.5', 'US 12'];

// eslint-disable-next-line import/prefer-default-export
export { svrURL, ValiderUsername, sizeList };
