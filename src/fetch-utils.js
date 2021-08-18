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

export const deleteDisc = async () => {

}

export const updateDisc = async (discObj) => {
    const resp = await fetch(`${URL}/discs/${discObj.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(discObj),
    });
    const data = await resp.json();
    return data;
}

export const createDisc = async () => {

}