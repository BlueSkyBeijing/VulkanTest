#version 450

layout(location = 1) in vec2 texcoord;
layout(location = 2) in vec2 extraTexcoord; // 不存在的输入

layout(location = 0) out vec4 outColor;

void main() {
    outColor = vec4(texcoord+extraTexcoord, 0.0, 1.0);
}
