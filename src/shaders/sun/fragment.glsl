uniform float uTime;

varying vec2 vUv;
varying vec3 vPosition;

#include ../includes/snoise.glsl

// 6
float fbm(vec4 p) {
  float sum = 0.0;
  float amp = 1.0;
  float scale = 1.0;
  for(int i = 0; i < 6; i++) {
    sum += snoise(p * scale) * amp;
    p.w += 100.0;
    amp *= 0.9;
    scale *= 2.0;
  }
  return sum;
}

void main() {
  vec4 p = vec4(vPosition * 3.0, uTime * 0.015);
  float noisy = fbm(p);

  vec4 p1 = vec4(vPosition * 2.0, uTime * 0.015);
  float spots = max(snoise(p1), 0.0);
  
  float spotsMix = mix(1.0, spots, 0.8);

  noisy *= spotsMix;

  gl_FragColor = vec4(noisy, noisy, noisy, 1.0);
  
  // gl_FragColor *= vec4(spotsMix, spotsMix, spotsMix, 1.0);
} 