var Modeler = require("../Modeler.js");
var className = 'ElementRemark';

var ElementRemark = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Remark: {
      type: "TypeRemarkType",
      wsdlDefinition: {
        name: "Remark",
        type: "RemarkType",
        "xsd:annotation": {
          "xsd:documentation": "A remark provide a structure to capture a code that could trigger a follow-up action and a free form comment related to follow-up action needed."
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
	  Remark: {
      type: "TypeRemarkType",
      wsdlDefinition: {
        name: "Remark",
        type: "RemarkType",
        "xsd:annotation": {
          "xsd:documentation": "A remark provide a structure to capture a code that could trigger a follow-up action and a free form comment related to follow-up action needed."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRemark;
Modeler.register(ElementRemark, "ElementRemark");
