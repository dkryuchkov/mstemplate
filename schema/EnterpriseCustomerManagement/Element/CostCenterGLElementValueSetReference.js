var Modeler = require("../Modeler.js");
var className = 'ElementCostCenterGLElementValueSetReference';

var ElementCostCenterGLElementValueSetReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CostCenterGLElementValueSetReference: {
      type: "TypeGLElementValueSetReferenceType",
      wsdlDefinition: {
        name: "CostCenterGLElementValueSetReference",
        type: "GLElementValueSetReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A reference to a Value Set for a GL Cost Center segment"
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
	  CostCenterGLElementValueSetReference: {
      type: "TypeGLElementValueSetReferenceType",
      wsdlDefinition: {
        name: "CostCenterGLElementValueSetReference",
        type: "GLElementValueSetReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A reference to a Value Set for a GL Cost Center segment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCostCenterGLElementValueSetReference;
Modeler.register(ElementCostCenterGLElementValueSetReference, "ElementCostCenterGLElementValueSetReference");
