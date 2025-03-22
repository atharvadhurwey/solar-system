varying vec2 vUv;
varying vec3 vPosition;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

  // Varyings
  vUv = uv;
  vPosition = position;
}