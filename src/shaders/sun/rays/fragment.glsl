#ifdef GL_ES 
 precision highp float; 
#endif 

varying float vUVY; 
varying float vOpacity; 
varying vec3 vColor; 
varying vec3 vNormal; 

uniform float uAlphaBlended; 

float getAlpha(vec3 n) 
{ 
	float uVisibility = 1.0;
	float uDirection = 1.0;	 
	vec3 uLightView = vec3(0.0, 0.0, 0.0); 	
	float nDotL = dot(n, uLightView) * uDirection; 
	return smoothstep(1.0, 1.5, nDotL + uVisibility * 2.5); 
} 

void main(void) { 
	vec3 c = vec3(1.0, 0.6, 0.4) ; 
	float alpha = smoothstep(1.0, 0., abs(vUVY)); 
	alpha *= alpha; 
	alpha *= vOpacity; 
	alpha *= getAlpha(vNormal); 
	gl_FragColor = vec4(vColor * alpha, uAlphaBlended); 
} 