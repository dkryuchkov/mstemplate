var Modeler = require("../Modeler.js");
var className = 'ElementIntermediateMessageHop';

var ElementIntermediateMessageHop = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  IntermediateMessageHop: {
      type: "TypeIntermediateMessageHopType",
      wsdlDefinition: {
        name: "IntermediateMessageHop",
        type: "IntermediateMessageHopType",
        "xsd:annotation": {
          "xsd:documentation": "This component allows for capturing of messaging properties in a multi-hopping messaging. The information can be used to support, for example, guaranteed delivery and auto recovery/resubmit of faulted messages. Note that the component does not capture the information of the first hop, the originator, because other fields in the EBMHeader already captures those such as the Sender and EBMID element."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  IntermediateMessageHop: {
      type: "TypeIntermediateMessageHopType",
      wsdlDefinition: {
        name: "IntermediateMessageHop",
        type: "IntermediateMessageHopType",
        "xsd:annotation": {
          "xsd:documentation": "This component allows for capturing of messaging properties in a multi-hopping messaging. The information can be used to support, for example, guaranteed delivery and auto recovery/resubmit of faulted messages. Note that the component does not capture the information of the first hop, the originator, because other fields in the EBMHeader already captures those such as the Sender and EBMID element."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementIntermediateMessageHop;
Modeler.register(ElementIntermediateMessageHop, "ElementIntermediateMessageHop");
