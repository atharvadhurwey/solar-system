uniform float uTime;
varying vec2 vUv;
varying vec3 vPosition;

#include ../includes/snoise.glsl

vec2 fbm(vec4 p) {
  float scale = 1.0;
  float amp = 1.0;
  vec2 sum = vec2(0.0);
  for (int i = 0; i < 6; i++) {
    sum.x += snoise(p * scale) * amp;
    p.w += 100.0;
    sum.y += snoise(p * scale) * amp;
    amp *= 0.8;
    scale *= 2.0;
  }
  return sum;
}

void main() {
  float uSpatialFrequency = 6.0; // 6.0
  float uTemporalFrequency = 0.1; // 0.1
  float uH = 0.8; // 0.8
  float uContrast = 0.25; // 0.25
  float uFlatten = 0.72; // 0.72

  vec3 world = normalize(vPosition);
  world += 12.45;

  vec4 p = vec4(world * uSpatialFrequency, uTime * uTemporalFrequency);
  gl_FragColor.xy = fbm(p) * uContrast + 0.5;

  // low frequency modulation on opacity to mimic flares
  vec4 p2 = vec4(world * 2.0, uTime * uTemporalFrequency);
  float modulate = max(snoise(p2), 0.0);
  gl_FragColor.x *= mix(1.0, modulate, uFlatten);

  gl_FragColor.zw = gl_FragColor.yx;
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
