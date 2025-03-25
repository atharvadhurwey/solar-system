
#ifdef GL_ES 
 precision highp float; 
#endif 

uniform float uTime;
uniform samplerCube uCubePerlin;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

varying vec3 vLayer0;
varying vec3 vLayer1;
varying vec3 vLayer2;
varying vec3 eyeVector;

vec3 brightnessToColor(float b) 
{ 
	// b *= uTint; 
	// return (vec3(b, b * b, b*b*b * b)/ (uTint)) * uBrightness; 

	b *= 0.26; 
	return (vec3(b, b * b, b*b*b * b)/ (0.26)) * 0.6; 
} 
float ocean(in vec3 p) 
{ 
	float sum = 0.; 
	sum += textureCube(uCubePerlin, vLayer0).r; 
	sum += textureCube(uCubePerlin, vLayer1).r; 
	sum += textureCube(uCubePerlin, vLayer2).r; 
	return sum * 0.33; 
} 
 
float distToCenter(vec3 ro, vec3 rd) 
{ 
	float d = dot(- ro, rd); 
	return length(ro + d * rd); 
} 

float getAlpha(vec3 n) 
{ 
	float uVisibility = 1.0;
	float uDirection = 1.0;	 
	vec3 uLightView = vec3(0.0, 0.0, 0.0); 	
	float nDotL = dot(n, uLightView) * uDirection; 
	return smoothstep(1.0, 1.5, nDotL + uVisibility * 2.5); 
} 

void mainImage( out vec4 fragColor, in vec2 fragCoord )	{

	float uFresnelPower = 1.0; // 1.0
	float uFresnelInfluence = 1.2; // 1.2
	float uTint = 0.26; // 0.26
	float uBase = 4.0; // 4.0
	float uBrightnessOffset = 1.0; // 1.0
	float uBrightness = 0.6; // 0.6

	// Normal Fix
	vec3 n = normalize(vNormal);
	if(!gl_FrontFacing) {
		n *= -1.0;
	}
	vec3 rd = normalize(vPosition - cameraPosition);
	vec3 ro = cameraPosition;
	float nDotV = dot(n, -rd);
	float fresnel = pow(1. - nDotV,uFresnelPower) * uFresnelInfluence; 

	float brightness = ocean(n); 
	brightness = brightness * uBase + uBrightnessOffset; 
	brightness += fresnel; 

	vec3 col = brightnessToColor(brightness); 
	col = clamp(col, 0.0, 1.0); 

	fragColor = vec4(col , getAlpha(n)); 
}

void main(void) { 
 	mainImage(gl_FragColor, gl_FragCoord.xy); 
} 