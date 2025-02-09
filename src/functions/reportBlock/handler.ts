import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { middyfy } from '@libs/lambda';
import ServicesLayer from "../../services";
import { randomUUID } from "crypto";
import { header, statusCodes } from "@functions/resources/APIresponse";

//function for writing and editing text on textBox
export const editBlock = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const params = JSON.parse(event.body);

        let text: any;
        let styles: any;

        if(params.reportBlockID==undefined){
          var id = "BL-"+randomUUID();
          text = await ServicesLayer.reportBlockService.addReportBlock({reportBlockID: id, reportID: params.reportID, blockType: 'RICHTEXT', position: params.position, richText: params.text});
          var sid = "ST-"+randomUUID();
          styles = await ServicesLayer.textStyleService.addStyle({textStylesID: sid, reportBlockID: id, align: params.textStyle.Align, bold: params.textStyle.Bold, colour: params.textStyle.Color, italic: params.textStyle.Italic, size: params.textStyle.Size});
        }else{
          text = await ServicesLayer.reportBlockService.addReportBlock({reportBlockID: params.reportBlockID, reportID: params.reportID, blockType: 'RICHTEXT', position: params.position, richText: params.text});
          styles = await ServicesLayer.textStyleService.addStyle({textStylesID: params.styleID, reportBlockID: params.reportBlockID, align: params.textStyle.Align, bold: params.textStyle.Bold, colour: params.textStyle.Color, italic: params.textStyle.Italic, size: params.textStyle.Size});
        }
        
        return {
            statusCode: statusCodes.Successful,
            headers: header,
            body: JSON.stringify({text: text, styles: styles})
          }
          
    } catch (e) {
      return {
        statusCode: statusCodes.internalError,
        headers: header,
        body: JSON.stringify(e)
      }
      }
});