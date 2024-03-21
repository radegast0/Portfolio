import { ShaderMaterial, Vector2 } from 'three';

const CustomShaderMaterial = {
  uniforms: {
    u_resolution: { value: new Vector2() },
    u_mouse: { value: new Vector2() }
  },
  vertexShader: `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time; // Time uniform

void main() {
  vec2 mouse = u_mouse / u_resolution;

  // Define colors
  vec3 color1 = vec3(0.0, 0.0, 1.0); // Blue
  vec3 color2 = vec3(1.0, 1.0, 0.0); // Yellow

  // Calculate gradient position based on time
  float gradientPos = mod(u_time * 0.2, 2.0); // Repeat gradient every 2 seconds

  // Create a smooth gradient effect based on gradient position
  float gradient = smoothstep(0.2, 0.8, abs(mouse.x - gradientPos));

  // Interpolate between colors based on mouse position and gradient effect
  vec3 finalColor = mix(color1, color2, gradient);

  // Output final color
  gl_FragColor = vec4(finalColor, 1.0);
}
  `
};

export default CustomShaderMaterial;