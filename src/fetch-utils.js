const URL = 'https://hidden-beach-58098.herokuapp.com';

export const getDiscs = async () => {
    const resp = await fetch(`${URL}/discs`);
    const data = await resp.json();
    return data;
};