
varying vec3 vPosition;
varying vec3 vNormal;

vec3 brightnessToColor(float b) {
	b *= 0.25;
	return (vec3(b, b * b, b * b * b * b) / 0.25) * 0.8;
}


void main()	{
	vec3 viewDirection = normalize(vPosition - cameraPosition);
	vec3 earthDirection = vec3(0.0, 0.0, 1.0);
	vec3 color = vec3(0.0);

	// Normal Fix
	vec3 normal = normalize(vNormal);

	// Atmosphere
	color += brightnessToColor(1.0);

	float edgeAlpha = dot(viewDirection, normal);
	edgeAlpha = smoothstep(0.0, 0.8, edgeAlpha);

	float alpha = edgeAlpha;

	// Final color
	gl_FragColor = vec4(color, alpha);
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}