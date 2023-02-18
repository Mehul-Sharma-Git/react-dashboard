import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
interface SparkLineProps {
  currentColor?: any;
  id?: any;
  type?: any;
  height?: any;
  width?: any;
  data?: any;
  color?: any;
}
const SparkLine: React.FC<SparkLineProps> = (props) => {
  const { currentColor, id, type, height, width, data, color } = props;
  console.log(data);
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
      tooltipSettings={{
        visible: true,
        format: "${x}:${yval}",
        trackLineSettings: { visible: true },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
