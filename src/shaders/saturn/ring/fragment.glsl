uniform sampler2D ringTexture;
uniform float innerRadius;
uniform float outerRadius;
uniform vec3 uPlanetPosition;

varying vec3 vPos;

vec4 color() {
  vec3 sunDirection = normalize(-uPlanetPosition);
  vec2 uv = vec2(0);
  uv.x = (length(vPos) - innerRadius) / (outerRadius - innerRadius);
  if (uv.x < 0.0 || uv.x > 1.0) {
    discard;
  }
  
  // Sample the texture
  vec4 pixel = texture2D(ringTexture, uv);
  
  // Define Saturn ring base color (neutral beige/gray)
  vec3 saturnRingColor = vec3(0.8, 0.75, 0.7); // Light beige-gray
  
  // Compute reflection using view direction
  vec3 viewDir = normalize(cameraPosition - vPos);
  vec3 reflection = reflect(-sunDirection, normalize(vPos));
  
  // Compute reflection intensity
  float specular = max(dot(reflection, viewDir), 0.0);
  specular = pow(specular, 32.0) * 0.1; // Subtle highlight for Saturn's rings
  
  // Blend texture with Saturn-like ring color
  float blendFactor = 0.8; // Control texture influence
  vec3 finalColor = mix(saturnRingColor, pixel.rgb, blendFactor);
  
  // Add specular reflection to final color
  finalColor += specular * vec3(1.0, 1.0, 1.0); // White reflection
  
  return vec4(finalColor, pixel.a); // Keep original alpha
}

void main() {
  gl_FragColor = color();
}
