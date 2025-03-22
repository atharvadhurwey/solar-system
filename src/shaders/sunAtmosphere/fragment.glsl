
varying vec3 vPosition;
varying vec3 vNormal;

vec3 brightnessToColor(float b) {
	b *= 0.25;
	return (vec3(b, b * b, b * b * b * b) / 0.46) * 1.06;
}


void main()	{
	vec3 viewDirection = normalize(vPosition - cameraPosition);
	vec3 color = vec3(0.0);

	// Normal Fix
	vec3 normal = normalize(vNormal);

	// Atmosphere
	float edgeAlpha = dot(viewDirection, normal);
	edgeAlpha = smoothstep(0.0, 1.0, edgeAlpha);

	float alpha = edgeAlpha;

	color += brightnessToColor(1.06) * (alpha * 3.0);

	// Final color
	gl_FragColor = vec4(color, alpha);
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}