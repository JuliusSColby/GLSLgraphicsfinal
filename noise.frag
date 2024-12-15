#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float rand1 = fract(sin(dot(uv, vec2( 12.9898, 78.233))) * 43758.5453);
    vec3 color = vec3(rand1);
    gl_FragColor = vec4(color, 1.0);
}