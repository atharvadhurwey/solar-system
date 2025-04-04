varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vec4 world = vec4(position, 1.0);

  gl_Position = projectionMatrix * modelViewMatrix * world;

  // Varyings
  vUv = uv;
  vPosition = world.xyz;
}