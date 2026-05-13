import natural from 'natural';

export const similarity = (text1, text2) => {
    return natural.JaroWinklerDistance(text1,text2);    
}