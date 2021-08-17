const URL = 'https://hidden-beach-58098.herokuapp.com';

export const getDiscs = async () => {
    const resp = await fetch(`${URL}/discs`);
    const data = await resp.json();
    return data;
};

export const getDisc = async (id) => {
    const resp = await fetch(`${URL}/discs/${id}`);
    const data = await resp.json();
    return data;
};

export const getManufacturers = async () => {
    const resp = await fetch(`${URL}/manufacturers`);
    const data = await resp.json();
    return data;
};