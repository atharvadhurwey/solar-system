uniform sampler2D uSurfaceTexture;
uniform vec3 uSunDirection;
uniform vec3 uAtmosphereColor;
uniform vec3 uAtmosphereTwilightColor;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main()
{
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    vec3 normal = normalize(vNormal);
    vec3 color = vec3(0.0);

    // Sun orientation
    float sunOrientation = dot(uSunDirection, normal);

    // Day / night color
    float dayMix = smoothstep(-0.25, 0.5, sunOrientation);
    vec3 dayColor = texture(uSurfaceTexture, vUv).rgb;
    color = mix(vec3(0.0, 0.0, 0.0), dayColor, dayMix);

    // Fresnel
    float fresnel = dot(viewDirection, normal) + 1.0;
    fresnel = pow(fresnel, 2.0);

    // Atmosphere
    float atmosphereDayMix = smoothstep(-0.5, 1.0, sunOrientation);
    vec3 atmosphereColor = mix(uAtmosphereTwilightColor, uAtmosphereColor, atmosphereDayMix);
    color = mix(color, atmosphereColor, fresnel * atmosphereDayMix); 

    // Specular
    vec3 reflection = reflect(-uSunDirection, normal);
    float specular = - dot(reflection, viewDirection);
    specular = pow(max(specular, 0.0), 32.0);

    specular *= 0.2;

    vec3 specularColor = mix(vec3(1.0), atmosphereColor, fresnel);
    color += specular * specularColor;


    // Final color
    gl_FragColor = vec4(color, 1.0);
    // gl_FragColor = vec4(vec3(specular), 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}