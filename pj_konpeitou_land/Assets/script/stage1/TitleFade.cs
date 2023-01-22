using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class TitleFade : MonoBehaviour
{
    float time;
    bool is_incremet = true;

    public GameObject StageManager;

    // Start is called before the first frame update
    void Start()
    {
        time = 0.0f;
    }

    // Update is called once per frame
    void Update()
    {
        if(time > 2.0f)
        {
            is_incremet = false;
        }
        
        if (is_incremet)
        {
            time += Time.deltaTime;
        }
        else if (!is_incremet)
        {
            time -= Time.deltaTime;
        }

        Debug.Log(time);

        GetComponent<RawImage>().color = new Color(255, 255, 255, time / 1.0f);

        if(!is_incremet && (time < -1.0f))
        {
            Debug.Log(StageManager.GetComponent<StageManager>().on_stage_count);
            Debug.Log(StageManager.GetComponent<StageManager>().stageObj[0].gameObject);
            //Debug.Log();

            StageManager.GetComponent<StageManager>().on_stage_count = global::StageManager.StageCount.stage2;
            StageManager.GetComponent<StageManager>().stageObj[0].gameObject.SetActive(false);
            StageManager.GetComponent<StageManager>().stageObj[1].gameObject.SetActive(true);
        }
    }
}
