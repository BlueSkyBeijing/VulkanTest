#version 450

layout(location = 1) in vec2 texcoord;


layout(location = 0) out vec4 outColor;

void main() {
    outColor = vec4(texcoord, 0.0, 1.0);
}
