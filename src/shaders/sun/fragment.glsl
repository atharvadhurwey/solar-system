uniform float uTime;
uniform samplerCube uCubePerlin;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

varying vec3 vLayer0;
varying vec3 vLayer1;
varying vec3 vLayer2;
varying vec3 eyeVector;


vec3 brightnessToColor(float b) {
	b *= 0.25;
	return (vec3(b, b * b, b * b * b * b) / 0.25) * 0.8;
}

float superSun() {
	float sum = 0.0;
	sum += textureCube(uCubePerlin, vLayer0).r;
	sum += textureCube(uCubePerlin, vLayer1).r;
	sum += textureCube(uCubePerlin, vLayer2).r;
	sum *= 0.333;
	return sum;
}

float Fresnel(vec3 eyeVector, vec3 worldNormal) {
  return pow(1.0 + dot(eyeVector, worldNormal), 3.0);
}

void main()	{
	// Normal Fix
	vec3 normal = normalize(vNormal);
	if(!gl_FrontFacing) {
		normal *= -1.0;
	}

	float fres = Fresnel(eyeVector, normal);

	float brightness = superSun();
	brightness = brightness * 4.0 + 1.0;
	brightness += fres;

	vec3 col = brightnessToColor(brightness);
	gl_FragColor = vec4(col, 1.0);
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}