import { Resource } from '../interface/resources';
import { StructureDescribe } from '../interface/structure.describe';
export const Resources: Resource[]=[
{
  index: 'function',
    infoText:['新能源汽车的DC-DC转化器将动力电池的高压直流电降为12V的低压直流电，为车身低压辅助电器供电，同时为备用电池充电。','它有以下特点：','1）变换功率大，效率高；','2）工作稳定，抗电磁干扰，输出响应快捷；','3）控制方便，准确。',' 现在新能源汽车上常用的DC-C-DC转换器有，直流斩波式降压转换器和单端正激式降压转换器。本章节主要介绍单端正'+'激式降压转换器。'
],
      audioSrc:['assets/audio/1_1.wav', 'assets/audio/1_1.mp3']
},
{
  index: 'structure',
    infoText:['单端正激式降压转换器转化效率高，功率密度大，广泛应用于新能源汽车的高低压转换。下面介绍其工作原理：','单端正激式转换器采用变压器的工作原理实现降压。变压器工作基于电磁感应原理，而直流电不会产生磁场变化，因此需要将直流高压转变为交流（或脉冲）电，然后再把高压变为低压（12V），最后再经过整流变成低压直流（12V）。'],
      audioSrc:['assets/audio/2_2.wav', 'assets/audio/2_2.mp3']
},
{
  index: 'principle',
  infoText:['下图为EV200DC-DC转换器的工作电路图。当点火开关关闭时，整车控制器将通过V62#端子给转换器发送工作信号，控制转换器将高压直流电转变成低压直流电，并将工作信号通过A2#端子反馈给整车控制器和仪表。'],
    audioSrc:['assets/audio/3_3.wav', 'assets/audio/3_3.mp3']
},
{
  index: 'test',
    infoText:['新能源车的绝缘电阻电阻需要大于20MΩ才能保证人身安全，下面来测量DC-DC转换器高压正负极接口对车身的绝缘电阻。'],
      audioSrc:['assets/audio/4_4.wav', 'assets/audio/4_4.mp3']
}

  ]

export const structureResources : StructureDescribe[] = [
    {
      index:'DirectCurrent',
      infoText:['直流斩波降压转换器的主要部件是IGBT（绝缘栅型功率晶体管），它采用调整脉宽或调整频率的方式降低输出电压。','直流斩波降压转换器结构简单，转化效率高，但功率密度较小，限制了本身的使用。'],
    },
    {
      index:'SingleEnded',
      infoText:['单端正激式降压转换器主要是采用了变压器的原理进行降压。','单端正激式降压转换器转化效率高，功率密度大，广泛应用于新能源汽车的高低压转换。']
    }
]
