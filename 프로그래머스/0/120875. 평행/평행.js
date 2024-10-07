function solution(dots) {
    if(func(dots[0],dots[1])==func(dots[2],dots[3]))
        return 1;
    if(func(dots[0],dots[2])==func(dots[1],dots[3]))
        return 1;
    if(func(dots[0],dots[3])==func(dots[1],dots[2]))
        return 1;
    return 0;
}

function func(dot1,dot2) {
    return (dot1[1]-dot2[1]) / (dot1[0]-dot2[0]);
}