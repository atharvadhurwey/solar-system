uniform sampler2D ringTexture;
uniform float innerRadius;
uniform float outerRadius;
uniform vec3 uSunDirection;

varying vec3 vPos;

vec4 color() {
  vec2 uv = vec2(0);
  uv.x = (length(vPos) - innerRadius) / (outerRadius - innerRadius);
  if (uv.x < 0.0 || uv.x > 1.0) {
    discard;
  }
  
  // Sample the texture
  vec4 pixel = texture2D(ringTexture, uv);
  
  // Define Uranus ring base color (gray with a slight blue hue)
  vec3 uranusRingColor = vec3(0.6, 0.65, 0.7); // Light bluish-gray
  
  // Compute reflection using view direction
  vec3 viewDir = normalize(cameraPosition - vPos);
  vec3 reflection = reflect(-uSunDirection, normalize(vPos));
  
  // Compute reflection intensity
  float specular = max(dot(reflection, viewDir), 0.0);
  specular = pow(specular, 16.0) * 0.3; // Increase shininess for a subtle highlight
  
  // Blend texture with Uranus-like ring color
  float blendFactor = 0.0; // Control texture influence
  vec3 finalColor = mix(uranusRingColor, pixel.rgb, blendFactor);
  
  // Add specular reflection to final color
  finalColor += specular * vec3(1.0, 1.0, 1.0); // White reflection
  
  return vec4(finalColor, pixel.a); // Keep original alpha
}

void main() {
  gl_FragColor = color();
}