uniform sampler2D uSurfaceTexture;
uniform vec3 uPlanetPosition;
uniform vec3 uAtmosphereColor;
uniform vec3 uAtmosphereTwilightColor;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main()
{
    vec3 sunDirection = normalize(-uPlanetPosition);
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    vec3 normal = normalize(vNormal);
    vec3 color = vec3(0.0);

    // Sun orientation
    float sunOrientation = dot(sunDirection, normal);

    // Day / night color
    float dayMix = smoothstep(-0.25, 0.5, sunOrientation);
    vec3 dayColor = texture(uSurfaceTexture, vUv).rgb;

    // Blend with Uranus-like color (soft blue-green)
    vec3 uranusBaseColor = vec3(0.4, 0.7, 0.9); // Typical Uranus hue

    // Control how much the texture influences the final color
    float textureInfluence = 0.4; // Adjust from 0.0 (full base color) to 1.0 (full texture)

    // Mix the texture with Uranus color for a more natural look
    dayColor = mix(uranusBaseColor, dayColor, textureInfluence);

    color = mix(vec3(0.0, 0.0, 0.0), dayColor, dayMix);

    // Fresnel
    float fresnel = dot(viewDirection, normal) + 1.0;
    fresnel = pow(fresnel, 2.0);

    // Atmosphere
    float atmosphereDayMix = smoothstep(-0.5, 1.0, sunOrientation);
    vec3 atmosphereColor = mix(uAtmosphereTwilightColor, uAtmosphereColor, atmosphereDayMix);
    color = mix(color, atmosphereColor, fresnel * atmosphereDayMix); 

    // Specular
    vec3 reflection = reflect(-sunDirection, normal);
    float specular = - dot(reflection, viewDirection);
    specular = pow(max(specular, 0.0), 32.0);

    specular *= 0.1; // Reduce specular intensity

    vec3 specularColor = mix(vec3(1.0), atmosphereColor, fresnel);
    color += specular * specularColor;


    // Final color
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}