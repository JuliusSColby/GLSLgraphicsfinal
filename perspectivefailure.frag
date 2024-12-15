#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
//in vec4 v_normal;
varying vec4 v_normal;
//varying vec2 v_uv;
//varying vec2 vUv;


void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution;
    //vec2 uv = vUv / u_resolution;
    float tiles = 10.0;
    vec2 pos = uv*tiles;

    vec3 wh = vec3(1.0,1.0,1.0);
    vec3 bl = vec3(0.0,0.0,0.0);

    float checkervalue = -.1;
    
    vec3 color = vec3(0.5,0.5,0.5);
    float check = 0.0;
    checkervalue = mod(floor(pos.x) + floor(pos.y), 2.0);
  
    if ((uv.y < 3.0 * uv.x) && uv.x <= .5){
        float normalizedX = (uv.x) * (uv.y);
        pos.x = pos.x * normalizedX;
        checkervalue = mod(floor(pos.x) + floor(pos.y), 2.0);
        if (checkervalue == 0.0){
        color = vec3(wh);
    }   else{
        color = vec3(bl);
    } 
    }
    else if ((uv.y < (3.0 * (1.0 - uv.x))) && uv.x >= .5){ 
        if (checkervalue == 0.0){
        color = vec3(wh);
    }   else{
        color = vec3(bl);
    } 
    }
    else{
        color = vec3(.5,.5,.5);
    }

    gl_FragColor = vec4(color, 1.0);
    








}