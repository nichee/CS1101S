
import { blank,circle,corner,heart,nova,pentagram,rcross,ribbon,sail,square
        ,triangle,black,blue,brown,color,green,indigo,orange,pink,purple
        ,random_color,red,white,yellow,anaglyph,animate_anaglyph,animate_rune
        ,beside,beside_frac,flip_horiz,flip_vert,from_url,hollusion
        ,hollusion_magnitude,make_cross,overlay,overlay_frac,quarter_turn_left
        ,quarter_turn_right,repeat_pattern,rotate,scale,scale_independent,show
        ,stack,stack_frac,stackn,translate,turn_upside_down} from 'rune';


function moony_1(bottom_right){
    return (beside(stack(circle,square),stack(blank,bottom_right)));
}


//show(moony_1(ribbon));


function moony_2(n){
    return moony_2Helper(n,0,circle);
}

function moony_2Helper(n,currentIter,currentMoony){
    return currentIter===n-1
    ?currentMoony
    :moony_2Helper(n , currentIter+1 , moony_1(currentMoony));
}

//show(moony_2(3));




//------------------------------------------------------------------------------

function moonyBasic(currentIter){
    return (stack_frac(
                         1 - (currentIter-1)/(currentIter)
                        ,circle
                        ,scale_independent(1/currentIter - 1,1,square)
    ));

}

show(stack(circle,scale_independent(1,1.5,square)));

show(moonyBasic(4));
show(moonyBasic(3));
show(moonyBasic(2));
show(moonyBasic(1));





function moony(n){
    return moony_helper(n,n,circle);
}

function moony_helper(n,currentIter,currentMoony){
    //const nextMoony = moonyBasic(currentMoony,n,currentIter);
    return currentIter === 1
    ? beside(currentMoony,stack(blank,circle))
    : moony_helper(n,currentIter-1 
                    ,beside(moonyBasic(currentIter) , stack_frac
                                                            (1/currentIter
                                                            ,blank
                                                            ,currentMoony)));

    
    
}

show(moony(4));


/*
                     , moonyBasic(
                       moonyBasic(currentMoony , n , currentIter)
                     , n
                     , currentIter+1));
                     
function moonyBasic(currentMoony,n,currentIter){
    return(beside_frac(
            1/(n - currentIter + 1)
            ,stack(circle,square)
            ,stack(blank,circle)));

*/

function moony_3(n){
    return n === 1 
           ? circle 
           : beside_frac(1/n,stack_frac(1/n,circle, square)
           ,stack_frac(1/n,blank, moony_3(n-1))); 
}

show(moony_3(4));


