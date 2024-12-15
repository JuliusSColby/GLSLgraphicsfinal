#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution; // Resolution of the viewport
uniform float u_time;      // Time for potential animation

void main() {
    // Normalized pixel coordinates (0.0 - 1.0)
    vec2 uv = gl_FragCoord.xy / u_resolution;

    // Scale UV coordinates to control the size of the checkerboard
    float scale = 10.0; // Number of squares along one axis
    vec2 scaledUV = uv * scale;

    // Compute the alternating pattern using modulo and floor
    float checker = mod(floor(scaledUV.x) + floor(scaledUV.y), 2.0);

    // Set colors for the checkerboard pattern
    vec3 color1 = vec3(0.0, 0.0, 0.0); // Black
    vec3 color2 = vec3(1.0, 1.0, 1.0); // White

    // Choose the color based on the checker value
    vec3 color = mix(color1, color2, checker);

    // Output the final color
    vec3 outsideRangeColor = vec3(.5,.5,.5);

    if (uv.x >= uv.y){
        color = outsideRangeColor;
    }


    gl_FragColor = vec4(color, 1.0);
}
