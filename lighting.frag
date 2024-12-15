#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
varying vec4 v_normal;


void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution;
    //vec2 uv = vUv / u_resolution;

    float tiles = 10.0;
    vec2 pos = uv*tiles;

    vec3 wh = vec3(1.0,1.0,1.0);
    vec3 bl = vec3(0.0,0.0,0.0);

    float checkervalue = mod(floor(pos.x) + floor(pos.y), 2.0);
    

    vec3 ambientcolor = vec3(0.3725, 0.0235, 0.2863);
    vec3 diffusecolor = vec3(0.0392, 0.8118, 0.102);
    vec3 specularcolor = vec3(1.0,1.0,1.0);

    float ambientmag = 0.4;
    vec3 ambient = ambientmag * ambientcolor;

    vec3 normal = normalize(v_normal.xyz);
    vec3 light = vec3(1.0,0.0,0.0);
    float diffusemag = max(0.0, dot(light, normal));
    vec3 diffuse = diffusemag * diffusecolor;

    vec3 camera = vec3(.0,.0,1.0);
    
    vec3 view = normalize(camera);
    vec3 reflect = normalize(reflect(-light, normal));
    float specularmag =  pow(max(0.0, dot(reflect, view)), 10.0);
    vec3 specular = specularmag * specularcolor;

    vec3 lighting = ambient + diffuse + specular;
    vec3 color = vec3(.0,.0,.0);   
    gl_FragColor = vec4(lighting, 1.0);
    








}