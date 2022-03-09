//@ts-nocheck
import glsl from "babel-plugin-glsl/macro"

export const vertex = glsl`
    uniform float uTime; 

    attribute float pindex; 

    #pragma glslify: curl = require(./curl.glsl)

    void main() {
        float f = 5.0;
        float amplitude = 1.0; 
        float maxDistance = 2.0;

        vec3 coords = position.xyz; 
        coords *= f;
        coords += uTime * 0.05; 

        vec3 targetPosition = position + curl(coords.x, coords.y, coords.z) * amplitude; 

        float d = length(position - targetPosition) / maxDistance;
        vec3 newPosition = mix(position, targetPosition, pow(d, 5.0));

        vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);  
        vec4 viewPosition = viewMatrix * modelPosition;
    
        gl_PointSize = 2.0 * (1.0 / - viewPosition.z);

        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;
    }
`
